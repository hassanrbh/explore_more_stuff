class Api::V1::ContactsController < ApplicationController
    def index
        # if !current_user
        #     render :json, {:errors => ["you are not authorized"]}, :status => :unauthorized
        # else
        #     @contacts = Contact.where(:user_id => current_user).order(:desc)
        #     render :index
        # end
        @contacts = Contact.all.order(:desc)
        render :index
    end
end

