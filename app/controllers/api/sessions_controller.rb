class Api::SessionsController < ApplicationController
    #skip_before_action :authorized, :only => [:create]

    def create
        @user = User.find_by(:email => params[:email])

        if @user.persisted? && @user.valid_password?(params[:password])
            session[:user_id] = @user.id
            render :json => @user, status: :created
        else
            render :json => {:errors => ["incorrect password or email"]}, status: 401
        end
    end
    
    def destroy
        session.delete(:user_id)
    end
end