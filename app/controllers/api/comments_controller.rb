class Api::CommentsController < ApplicationController
  def index
    if params[:bill_id] == nil
      render json: Comment.all
    else
      render json: Comment.all.where(bill_id: params[:bill_id])
    end
    # comments = Bill.find(params[:bill_id]).comments
    # render json: comments
  end

  def show
    # render json: Comment.find(params[:id])
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
