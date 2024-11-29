{
    "name": "Portal Purchase",
    "summary": "Portal Purchase",
    "description": "Portal Purchase",
    "author": "F",
    "maintainers": ["PINIX1101"],
    "website": "",
    "category": "",
    "version": "18.0.1.0.1",
    "depends": [
        "purchase",
        "web",
    ],
    "license": "OPL-1",
    "data": [
        "security/ir.model.access.csv",
        "views/portal_purchase_custom.xml",
        # "views/action_loader.xml",
    ],
    'assets': {
        'web.assets_frontend': [
            '/portal_purchase_custom/static/src/js/purchase_line.js',
        ],
    },
    "application": False,
    "installable": True,
    "auto_install": False,
    "external_dependencies": {"python": []},
}
