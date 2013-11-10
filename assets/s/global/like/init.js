/**
 * Created by 松松 on 13-11-7.
 */

define(function (require, exports, module) {
    $(document.body).on('click', '.J-like', function (ev) {
        ev.preventDefault()
        var $target = $(ev.currentTarget)
        if (location.href.indexOf('/design-works/detail')) {
            $.post('/design-works/index/add-like', {
                    id: $target.data('id'),
                    _csrf: window._csrf_token_
                }
            ).done(function (data) {
                    console.log(data)
                })
        }
    })

    //增加浏览量
    $.post('/design-works/index/add-view', {
            id: window.designWorksId,
            _csrf: window._csrf_token_
        }
    ).done(function (data) {
            console.log(data)
        })
})