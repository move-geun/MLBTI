package com.ssafy.db.qentity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;
import com.ssafy.db.entity.UserTeams;


/**
 * QUserTeams is a Querydsl query type for UserTeams
 */
@Generated("com.querydsl.codegen.EntitySerializer")
public class QUserTeams extends EntityPathBase<UserTeams> {

    private static final long serialVersionUID = 700904233L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QUserTeams userTeams = new QUserTeams("userTeams");

    public final QBaseEntity _super = new QBaseEntity(this);

    public final QBaseballPlayers baseballPlayer;

    public final StringPath position = createString("position");

    public final NumberPath<Integer> team_index = createNumber("team_index", Integer.class);

    //inherited
    public final NumberPath<Integer> uid = _super.uid;

    public final QUsers user;

    public QUserTeams(String variable) {
        this(UserTeams.class, forVariable(variable), INITS);
    }

    public QUserTeams(Path<? extends UserTeams> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QUserTeams(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QUserTeams(PathMetadata metadata, PathInits inits) {
        this(UserTeams.class, metadata, inits);
    }

    public QUserTeams(Class<? extends UserTeams> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.baseballPlayer = inits.isInitialized("baseballPlayer") ? new QBaseballPlayers(forProperty("baseballPlayer")) : null;
        this.user = inits.isInitialized("user") ? new QUsers(forProperty("user")) : null;
    }

}

