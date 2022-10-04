package com.ssafy.db.qentity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;
import com.ssafy.db.entity.Pitchers;


/**
 * QPitchers is a Querydsl query type for Pitchers
 */
@Generated("com.querydsl.codegen.EntitySerializer")
public class QPitchers extends EntityPathBase<Pitchers> {

    private static final long serialVersionUID = -247523352L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QPitchers pitchers = new QPitchers("pitchers");


    public final NumberPath<Float> average = createNumber("average", Float.class);

    public final QBaseballPlayers baseballPlayer;

    public final StringPath birthday = createString("birthday");

    public final StringPath education = createString("education");

    public final NumberPath<Float> height = createNumber("height", Float.class);

    public final NumberPath<Integer> leftAoNum = createNumber("leftAoNum", Integer.class);

    public final NumberPath<Integer> leftBbNum = createNumber("leftBbNum", Integer.class);

    public final NumberPath<Integer> leftDpNum = createNumber("leftDpNum", Integer.class);

    public final NumberPath<Integer> leftEr = createNumber("leftEr", Integer.class);

    public final NumberPath<Integer> leftGameNum = createNumber("leftGameNum", Integer.class);

    public final NumberPath<Integer> leftHitNum = createNumber("leftHitNum", Integer.class);

    public final NumberPath<Integer> leftHrNum = createNumber("leftHrNum", Integer.class);

    public final NumberPath<Integer> leftIbbNum = createNumber("leftIbbNum", Integer.class);

    public final NumberPath<Integer> leftNotMyEr = createNumber("leftNotMyEr", Integer.class);

    public final NumberPath<Integer> leftPaNum = createNumber("leftPaNum", Integer.class);

    public final NumberPath<Integer> leftThreebHitNum = createNumber("leftThreebHitNum", Integer.class);

    public final NumberPath<Integer> leftTwobHitNum = createNumber("leftTwobHitNum", Integer.class);

    public final StringPath name = createString("name");

    public final StringPath playerWeatherTmi = createString("playerWeatherTmi");

    public final StringPath position = createString("position");

    public final NumberPath<Integer> rightAoNum = createNumber("rightAoNum", Integer.class);

    public final NumberPath<Integer> rightBbNum = createNumber("rightBbNum", Integer.class);

    public final NumberPath<Integer> rightDpNum = createNumber("rightDpNum", Integer.class);

    public final NumberPath<Integer> rightEr = createNumber("rightEr", Integer.class);

    public final NumberPath<Integer> rightGameNum = createNumber("rightGameNum", Integer.class);

    public final NumberPath<Integer> rightHitNum = createNumber("rightHitNum", Integer.class);

    public final NumberPath<Integer> rightHrNum = createNumber("rightHrNum", Integer.class);

    public final NumberPath<Integer> rightIbbNum = createNumber("rightIbbNum", Integer.class);

    public final NumberPath<Integer> rightNotMyEr = createNumber("rightNotMyEr", Integer.class);

    public final NumberPath<Integer> rightPaNum = createNumber("rightPaNum", Integer.class);

    public final NumberPath<Integer> rightThreebHitNum = createNumber("rightThreebHitNum", Integer.class);

    public final NumberPath<Integer> rightTwobHitNum = createNumber("rightTwobHitNum", Integer.class);

    public final NumberPath<Integer> season = createNumber("season", Integer.class);

    public final NumberPath<Integer> playerUid = createNumber("playerUid", Integer.class);

    public final NumberPath<Float> standardDeviation = createNumber("standardDeviation", Float.class);

    public final QTeams team;

    public final StringPath team_name = createString("team_name");

    public final NumberPath<Float> weight = createNumber("weight", Float.class);

    public QPitchers(String variable) {
        this(Pitchers.class, forVariable(variable), INITS);
    }

    public QPitchers(Path<? extends Pitchers> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QPitchers(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QPitchers(PathMetadata metadata, PathInits inits) {
        this(Pitchers.class, metadata, inits);
    }

    public QPitchers(Class<? extends Pitchers> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.baseballPlayer = inits.isInitialized("baseballPlayer") ? new QBaseballPlayers(forProperty("baseballPlayer")) : null;
        this.team = inits.isInitialized("team") ? new QTeams(forProperty("team")) : null;
    }

}

