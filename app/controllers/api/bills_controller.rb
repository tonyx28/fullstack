class Api::BillsController < ApplicationController
  def index
    render json: Bill.all.where(user_id: current_user.id)
  end

  def show
    render json: Bill.find(params[:id])
  end

  def create
    @bill = Bill.new(bill_params)
    @bill.owed_amt = @bill.cost / 2
    if @bill.save
      render json: @bill
    else
      render json: @bill.errors.full_messages, status: 422
    end
  end

  def update
    @bill = Bill.find(params[:id])
    if @bill.update(bill_params)
      render json: @bill
    else
      render json: @bill.errors.full_messages, status: 422
    end
  end

  def destroy
    bill = Bill.find(params[:id]).destroy
    render json: bill
  end

  private
  def bill_params
    params.require(:bill).permit(:description, :cost, :date, :user_id, :friend_id)
  end
end
