class ApplicationController < ActionController::API
    include ActionController::Cookies

    private
    def current_user
        @user ||= User.find_by(id: session[:user_id])
    end
end