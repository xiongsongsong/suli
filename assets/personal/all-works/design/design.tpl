
        <div class="list-area">
            <ul class="list clearfix">
                #if(typeof docs!=='undefined')
                #each(item,index in docs)
                <li><a href="/design-works/detail/#{item._id}"><img src="/read/#{item.thumbnails_id.split(':')[0]}" alt="#{item.content.replace(/[\r\n]/gmi,'')}" width="230" height="175" class="avatar"></a>
                    <div class="control">
                        <a href="/design-works/edit/#{item._id}">编辑</a>
                        <a href="#{item._id}">删除</a>
                    </div>
                </li>
                #end
                #else
                <li>暂无数据</li>
                #end
            </ul>
        </div>