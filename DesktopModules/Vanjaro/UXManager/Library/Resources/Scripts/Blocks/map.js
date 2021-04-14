export default (editor, config = {}) => {
    const c = config;
    let bm = editor.BlockManager;

    if (c.blocks.map) {
        bm.add('map', {
            label: VjLocalized.Map,
            category: VjLocalized.Basic,
            attributes: { class: 'fa fa-map-o' },
            content: {
                type: 'map',
                classes: ['vj-map'],
                zoom: 10,
            },
        });
    }

    var domComps = editor.DomComponents;
    var dType = domComps.getType('map');
    var dModel = dType.model;
    var dView = dType.view;

    domComps.addType('map', {
        view: dView.extend({
            events: {
                click: function () {
                    setTimeout(function () {
                        var MapTimeOutid;
                        $('.traitsmanager .vj-field-text input').on('keyup', function () {
                            if (MapTimeOutid) {
                                clearTimeout(MapTimeOutid);
                            }
                            MapTimeOutid = setTimeout(function () {
                                $('.traitsmanager .vj-field-select select').focus();
                                $('.traitsmanager .vj-field-text input').focus();
                            }, 500);
                        });
                    }, 500);
                }
            }
        })
    });
}