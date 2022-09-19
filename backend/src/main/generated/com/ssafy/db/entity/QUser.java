package com.ssafy.db.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.Generated;
import com.querydsl.core.types.Path;


/**
 * QUser is a Querydsl query type for User
 */
@Generated("com.querydsl.codegen.EntitySerializer")
public class QUser extends EntityPathBase<Users> {

    private static final long serialVersionUID = 846542477L;

    public static final QUser user = new QUser("user");

    public final QBaseEntity _super = new QBaseEntity(this);

    public final StringPath department = createString("department");

    //inherited
    public final NumberPath<Integer> uid = _super.uid;

    public final StringPath nickname = createString("nickname");

    public final StringPath password = createString("password");

    public final StringPath email = createString("email");

    public final StringPath grade = createString("grade");
    
    public final NumberPath<Integer> user_teams_uid = createNumber("user_teams_uid", Integer.class);

    public QUser(String variable) {
        super(Users.class, forVariable(variable));
    }

    public QUser(Path<? extends Users> path) {
        super(path.getType(), path.getMetadata());
    }

    public QUser(PathMetadata metadata) {
        super(Users.class, metadata);
    }

}

