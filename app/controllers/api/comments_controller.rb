class Api::CommentsController < ApplicationController
  def index
    # render json: Comment.all.where(bill_id: bill_id)
    comments = Bill.find(params[:bill_id]).comments
    render json: comments
  end

  def create
    comment = Comment.new(comment_params)
    comment.date = Date.today
    if comment.save
      render json: comment
    else
      render json: comment.errors.full_messages, status: 422
    end
  end

  def destroy
    comment = Comment.find(params[:id]).destroy
    render json: comment
  end

  private

  def comment_params
    params.require(:comment).permit(:body, :username, :date, :bill_id)
  end
end
