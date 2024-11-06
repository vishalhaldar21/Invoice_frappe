# Copyright (c) 2024, vishal haldar and contributors
# For license information, please see license.txt

# import frappe
from frappe.model.document import Document


class GroceryOrder(Document):
	
   def validate(self):
       
       t_amount = 0
       
       for product in self.products:
           
           t_amount += (product.price * product.quantity)
        
       self.total_amount = t_amount
       
       
       discount = (self.discount * self.total_amount)/100
           
       self.payable_amount = self.total_amount - discount