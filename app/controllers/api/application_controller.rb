module Api
  class ApplicationController < ActionController::API
    attr_reader :current_user

    protected
    def authenticate_request!
      return render auth_error unless user_id_in_token?
      @current_user = User.find(@auth_token[:user_id])
    rescue JWT::VerificationError, JWT::DecodeError
      render auth_error
    end

    private

    def auth_error
      {
        json: { errors: ['Not Authenticated/Error'] },
        status: :unauthorized
      }
    end

    def http_token
      @http_token ||= if request.headers['Authorization'].present?
        request.headers['Authorization'].split(' ').last
      end
    end

    def auth_token
      @auth_token ||= JsonWebToken.decode(http_token)
    end

    def user_id_in_token?
      http_token && auth_token && @auth_token[:user_id].to_i
    end
  end
end
