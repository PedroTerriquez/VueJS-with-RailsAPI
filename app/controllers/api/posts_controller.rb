module Api
  class PostsController < Api::ApplicationController
    before_action :find_post, except: [:new, :create]
    before_action :authenticate_request!, except: [:destroy]

    def index
      @posts = Post.order(:id)
    end

    def show
    end

    def edit
    end

    def new
      @post = Post.new
    end

    def create
      @post = Post.new(post_params)
      if @post.save
        render 'show'
      else
        render json: @post.errors, status: 400
      end
    end

    def update
      if @post.update(post_params)
        render 'show'
      else
        render json: @post.errors, status: 400
      end
    end

    def destroy
      if @post.present?
        @post.destroy
        render json: { message: 'success' }, status: 200
      else
        render json: @post, message: 'Failed to remove', status: :bad_request
      end
    end

    private

    def find_post
      @post = Post.find_by(id: params[:id])
    end

    def post_params
      params.require(:post).permit(:title, :body)
    end
  end
end
