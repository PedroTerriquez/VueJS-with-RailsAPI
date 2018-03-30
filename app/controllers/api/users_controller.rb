module Api
  class UsersController < Api::ApplicationController
    before_action :find_user, only: [:show, :edit, :destroy, :update]
    wrap_parameters include: User.attribute_names + %i[password]

    def index
      @users = User.all
    end

    def new
      @user = User.new
    end

    def show
    end

    def edit
    end

    def create
      @user = User.new(user_params)
      save_user(:new)
      login
    end

    def destroy
      if @user.destroy
        redirect_to action: :index
      end
    end

    def update
      save_user(:edit)
    end

    def login
      user = User.find_by(email: params[:email])
      if user && user.authenticate(params[:password])
        render json: payload(user)
      else
        render json: { errors: ['Invalid Username/Password'] }, status: :unauthorized
      end
    end

    private
    def payload(user)
      return nil unless user and user.id
      {
        auth_token: JsonWebToken.encode({user_id: user.id}),
        user: { id: user.id, email: user.email, full_name: user.full_name }
      }
    end

    def save_user(action)
      if !@user.save
        render json: @user.errors, status: 400
      end
    end

    def user_params
      params.require(:user).permit(:first_name, :last_name, :email, :password)
    end

    def find_user
      @user = User.find(params[:id])
    end
  end
end
