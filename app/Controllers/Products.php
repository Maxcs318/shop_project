<?php namespace App\Controllers;

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
header('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
header('Access-Control-Allow-Credentials', true);

    // $id = md5(date("Y/m/d"));

use App\Models\ProductsModel;
use App\Models\Product_imageModel;

class Products extends BaseController
{
    // s
    public function products_all($page)
    {
        $productsModel = new ProductsModel();

        $limit_in = 9 ;
        $start_in = ($page*$limit_in)-$limit_in;

        $products = $productsModel->findAll($limit_in,$start_in); // limit  , start index 

        // $products = $productsModel->findAll();

        $products_length = sizeof($productsModel->findAll());

        $products = array($products_length,$products);

        return $this->response->setStatusCode(200)->setJSON($products);
    } 

    // s
	public function product($id)
    {
        $productsModel = new ProductsModel();

        $product_imageModel = new Product_imageModel();

        $product = $productsModel->find($id);


        if($product!=null){

            $product_image = $product_imageModel->where('pi_product_id',$id)->findAll();
        
            $product['product_another_image'] = $product_image;

        }        
        
        return $this->response->setStatusCode(200)->setJSON($product);
    }

    // s
    public function searchproducts($keyword)
    {
        $productsModel = new ProductsModel();

        $product = $productsModel->like('p_name',$keyword,'both')->findAll();

        return $this->response->setStatusCode(200)->setJSON($product);
    }

    // s
    public function create_product()
    {
        helper(['form']);

        $productsModel = new ProductsModel();

        $product_imageModel = new Product_imageModel();

        $data = json_decode($this->request->getVar('product'));

        $file = $this->request->getFile('previewFile_image');

        $anotherFiles_image_length = json_decode($this->request->getVar('anotherFiles_image_length'));

        if($file->isValid()){
        
            $file->move('./assets/products');

            $data->p_image = $file->getName();

            $product_id = $productsModel->insert($data);

            $data->p_id = $product_id;

            if($anotherFiles_image_length>0){
                for($i=0;$i<$anotherFiles_image_length;$i++){

                    $another_files = $this->request->getFile('anotherFiles_image'.+$i);
                    $another_files->move('./assets/products');
                    
                        $data_another_image = [
                            'pi_image' => $another_files->getName(),
                            'pi_product_id' => $product_id,
                            'pi_create_date' => date("d/m/Y")
                        ];

                    $product_image_id = $product_imageModel->insert($data_another_image);
                }
            }
            
            return $this->response->setStatusCode(200)->setJSON($data);

        }else{
            return $this->fail($file->getErrorString());
        }
    }

    // s
    public function update_product()
    {
        $productsModel = new ProductsModel();

        $product_info = $this->request->getJSON();
        
        $product = $productsModel->update($product_info->p_id, $product_info);

        return $this->response->setStatusCode(200)->setJSON($product_info);
    }

    // s
    public function delete_product()
    {
        $productsModel = new ProductsModel();

        $product_info = $this->request->getJSON();
        
        $product = $productsModel->delete($product_info->p_id);

        return $this->response->setStatusCode(200)->setJSON('Delete success');
    }

}
