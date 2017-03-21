class Api::CommentsController < ApplicationController
  def index
    render json: Comment.all.where(bill_id: bill_id)
  end

  def create
    @comment = Comment.new(comment_params)
    if @comment.save
      render json: @comment
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def destroy
    comment = Comment.find(params[:id]).destroy
    render json: bill
  end

  private

  def comment_params
    params.require(:comment).permit(:description, :username, :date)
  end
end
