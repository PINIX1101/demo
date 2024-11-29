# -*- coding: utf-8 -*-
import odoo.http as http
from odoo.http import request


class ContactUsContact(http.Controller):
    @http.route("/price-purchase-submit", type="http", auth="public", method=['POST'], website=True)
    def show_custom_webpage(self, **kw):
        if kw:
            for line in range(int(kw.get('line_count'))):
                id = int(kw.get('id' + str(line)))
                product_qty = float(kw.get('product_qty' + str(line))) or 0.0
                price_unit = float(kw.get('price_unit' + str(line))) or 0.0
                discount = float(kw.get('discount' + str(line))) or 0.0
                purchase_line = request.env["purchase.order.line"].browse(id)
                purchase_line.write({
                    'product_qty': product_qty,
                    'price_unit': price_unit,
                    'discount': discount,
                })
            return request.redirect("/my/purchase/" + kw.get('order_id'))
        return request.redirect("/my/rfq")