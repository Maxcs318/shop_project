<?php namespace App\Models;

use CodeIgniter\Model;

class ProductsModel extends Model {
    
    protected $table = 'products' ;
    protected $primaryKey = 'p_id' ;
    protected $allowedFields = ['p_name','p_description','p_image','p_category','p_price',
                                'p_amount','p_sold_out','p_status','p_create_date','p_update_date'] ;

}