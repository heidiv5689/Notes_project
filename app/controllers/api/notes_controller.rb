class Api::NotesController < ApplicationController
  before_action :authenticate_user!
  before_action :set_note, only: [:show, :update, :destroy]

  def index
    render json: current_user.notes
  end

  def show
    render json: @note
  end

  def create
    @note = current_user.notes.new(note_params)
    if @note.save
      render json: @note 
    else  
      render json: { errors: @note.errors }, status: :unprocessable_entity
    end
  end

  def update
    if @note.update(note_params)
      render json: @note 
    else  
      render json: { errors: @note.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    @note.destroy
    render json: { message: 'NOTE Released' }
  end

  private 
    def note_params 
      params.require(:note).permit(:subject, :body)
    end

    def set_note
      @note = current_user.notes.find(params[:id])
    end
end
