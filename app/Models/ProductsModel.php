<?php namespace App\Models;

use CodeIgniter\Model;

class ProductsModel extends Model {
    
    protected $table = 'products' ;
    protected $primaryKey = 'p_id' ;
    protected $allowedFields = ['p_name','p_description','p_image','p_price','p_amount'] ;

}