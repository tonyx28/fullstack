class Api::FriendsController < ApplicationController
  def index
    render json: Friend.all.where(user_id: current_user.id)
  end

  def create
    @friend = Friend.new(friend_params)
    if @friend.save
      render json: @friend
    else
      render json: @friend.errors.full_messages, status: 422
    end
  end

  def show
    render json: Friend.find(params[:id])
  end

  def update
    @friend = Friend.find(params[:id])
    if @friend.update(friend_params)
      render json: @friend
    else
      render json: @friend.errors.full_messages, status: 422
    end
  end

  def destroy
    friend = Friend.find(params[:id]).destroy
    render json: friend    
  end

  private
  def friend_params
    params.require(:friend).permit(:name, :email, :user_id)
  end
end
