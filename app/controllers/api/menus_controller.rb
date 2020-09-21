class Api::MenusController < ApplicationController


def index
  redner json: Menu.all 
end


def create
  item = Menu.new(menu_params)
  if menu.save
    render json: menu
  else
    render json: {errors: menu.errors}, status: :unprocessable_entity 
  end
  end
end

def update 
  item = Menu.find(params[:id])
  menu.update(complete: !menu.complete)
  render json: menu
end


 def destroy
  Menu.find(params[:id]).destroyrender json: {message: 'Menu deleted' } 
  

private

def menu_params
  params.require(:menu).permit(:name, :time)
end

end
