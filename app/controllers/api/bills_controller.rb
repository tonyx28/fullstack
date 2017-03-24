class Api::BillsController < ApplicationController
  def index
    if params[:friend_id] == nil
      render json: Bill.all.where(user_id: current_user.id)
    else
      render json: Bill.all.where(user_id: current_user.id).where(friend_id: params[:friend_id])
    end
  end

  def show
    render json: Bill.find(params[:id])
  end

  def create
    @bill = Bill.new(bill_params)
    owed_amt = @bill.cost / 2
    @bill.owed_amt = owed_amt

    friend = Friend.find_by(id: @bill.friend_id)
    puts friend
    puts friend.owed_amt
    puts friend.paid_amt
    
    if (@bill.paid_by_friend)
      friend.paid_amt += owed_amt
    else
      friend.owed_amt += owed_amt
    end

    if @bill.save
      # friend.save
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
