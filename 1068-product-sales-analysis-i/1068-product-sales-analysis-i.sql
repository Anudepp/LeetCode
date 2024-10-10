# Write your MySQL query statement below

select Product.product_name , Sales.year, Sales.price  from Sales INNER JOIN  Product ON Sales.product_id = Product.product_id

