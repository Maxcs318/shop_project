<?php namespace App\Models;

use CodeIgniter\Model;

class Product_imageModel extends Model {
    
    protected $table = 'product_image' ;
    protected $primaryKey = 'pi_id' ;
    protected $allowedFields = ['pi_product_id','pi_image','pi_create_date','pi_update_date'] ;

}