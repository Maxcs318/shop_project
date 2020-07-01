<?php namespace App\Controllers;

use App\Models\ProductsModel;

class Products extends BaseController
{
    // s
    public function products_all()
    {
        $productsModel = new ProductsModel();

        $products = $productsModel->findAll();

        return $this->response->setStatusCode(200)->setJSON($products);
    } 

    // s
	public function product($id)
    {
        $productsModel = new ProductsModel();

        $product = $productsModel->find($id);

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
        $productsModel = new ProductsModel();

        $product_info = $this->request->getJSON();

        // $product_info->p_id = md5(date("Y/m/d"));

        $product = $productsModel->insert($product_info);

        return $this->response->setStatusCode(200)->setJSON($product_info);
    }

    // s
    public function update_product()
    {
        $productsModel = new ProductsModel();

        $product_info = $this->request->getJSON();
        
        $product = $productsModel->update($product_info->p_id, $product_info);

        return $this->response->setStatusCode(200)->setJSON($product_info);
    }

    // 
    public function delete_product()
    {
        $productsModel = new ProductsModel();

        $product_info = $this->request->getJSON();
        
        $product = $productsModel->delete($product_info->p_id);

        return $this->response->setStatusCode(200)->setJSON('Delete success');
    }

}
