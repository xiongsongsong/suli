/**
 * Created by 松松 on 13-11-7.
 */



var app = require('app')
var db = require('db')
var ObjectID = db.mongodb.ObjectID
var helper = require('helper')

//作品的喜欢数据
app.post('/design-works/index/add-like', helper.csrf, function (req, res) {

    var result = {err: []}

    if (require('helper').isLogin(req) === false) {
        result.status = -1
        result.err.push('未登陆')
        res.jsonp(result)
        return
    }

    try {
        var id = ObjectID(req.body.id)
    } catch (e) {
        res.jsonp({status: -2, err: ['必要的参数不正确']})
        return;
    }

    //开始添加喜欢
    var like = new db.mongodb.Collection(db.Client, 'design-works-index-like')

    like.update({work_id: id.toString(), owner_id: req.session._id},
        {
            work_id: id.toString(),
            owner_user: req.session.user,
            owner_id: req.session._id,
            ts: Date.now()
        },
        {
            upsert: true, w: 1
        }, function (err, count) {
            if (!err && count > 0) {
                delete result.err
                result.status = 1
            } else {
                result.status = -3
                result.err.push('无法喜欢')
            }
            res.json(result)

            //将喜欢的数量汇总到design-works集合中
            var designWorks = new db.mongodb.Collection(db.Client, 'design-works')

            like.count({work_id: id.toString()}, function (err, count) {
                if (!err && count > 0) {
                    designWorks.update({_id: id}, {$set: {'index.love': count}}, {w: 1}, function () {
                        console.log('更新作品' + id.toString() + '的喜欢到：' + count, Date.now())
                    })
                } else {
                    console.log('更新喜欢时出错：' + id.toString(), err, Date.now())
                }
            })

        })
})
