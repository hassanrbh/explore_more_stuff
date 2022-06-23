class Api::UsersController < ApplicationController
    def show
        if current_user
            render json: current_user, :status => :ok
        else
            render json: "Not authenticated", :status => :unauthorized
        end
    end

    def create
        @user = User.new(users_params)
    
        if @user.save!
            session[:user_id] = @user.id
            render :json => @user, :status => :created
        else
            render :json => {:errors => @user.errors.full_messages} 
        end
    end
    private

    def users_params
        params.permit(:email,:password, :password_confirmation)
    end
end
