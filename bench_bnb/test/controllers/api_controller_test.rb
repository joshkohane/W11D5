require 'test_helper'

class ApiControllerTest < ActionDispatch::IntegrationTest
  test "should get Benches" do
    get api_Benches_url
    assert_response :success
  end

end
