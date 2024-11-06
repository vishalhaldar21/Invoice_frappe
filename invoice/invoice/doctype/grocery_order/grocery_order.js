// Copyright (c) 2024, vishal haldar and contributors
// For license information, please see license.txt



// frappe.ui.form.on("Grocery Order", {
// 	refresh(frm) {

// 	},

//     update_total_amount(frm){

//         let t_amount = 0;

//         for (let product of frm.doc.products){
           
//             t_amount += (product.price * product.quantity);
//         }
       
//         let disc = (discount * t_amount)/100;
           
//         let pa = t_amount - disc;

//         frm.set_value("total_amount",t_amount);
//         frm.set_value("discount",disc);
//         frm.set_value("payable_amount",pa);

//     }

// });

// frappe.ui.form.on("Product",{

//     refresh(frm){

//     },
//     quantity(frm){
//         frm.trigger("update_total_amount");
//     },
//     price(frm){
//         frm.trigger("update_total_amount");
//     }

// });
