package com.ssafy.db.qentity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;
import com.ssafy.db.entity.Notices;


/**
 * QNotices is a Querydsl query type for Notices
 */
@Generated("com.querydsl.codegen.EntitySerializer")
public class QNotices extends EntityPathBase<Notices> {

    private static final long serialVersionUID = 1575545497L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QNotices notices = new QNotices("notices");

    public final QBaseEntity _super = new QBaseEntity(this);

    public final StringPath content = createString("content");

    public final StringPath title = createString("title");

    //inherited
    public final NumberPath<Integer> uid = _super.uid;

    public final QUsers user;

    public QNotices(String variable) {
        this(Notices.class, forVariable(variable), INITS);
    }

    public QNotices(Path<? extends Notices> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QNotices(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QNotices(PathMetadata metadata, PathInits inits) {
        this(Notices.class, metadata, inits);
    }

    public QNotices(Class<? extends Notices> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.user = inits.isInitialized("user") ? new QUsers(forProperty("user")) : null;
    }

}

