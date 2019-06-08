module Api
  module V1
    class OrdersController < ApplicationController
      def index
        data = [
          {
            id: 1,
            category: 'flyer'
          },
          {
            id: 2,
            category: 'poster'
          },
        ]
        render json: { status: 'SUCCESS', message: 'loaded posts', data: data }
      end
    end
  end
end
