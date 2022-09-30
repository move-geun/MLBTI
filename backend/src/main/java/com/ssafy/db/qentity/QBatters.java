package com.ssafy.db.qentity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;
import com.ssafy.db.entity.Batters;


/**
 * QBatters is a Querydsl query type for Batters
 */
@Generated("com.querydsl.codegen.EntitySerializer")
public class QBatters extends EntityPathBase<Batters> {

    private static final long serialVersionUID = -885042171L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QBatters batters = new QBatters("batters");


    public final NumberPath<Float> average = createNumber("average", Float.class);

    public final QBaseballPlayers baseballPlayer;

    public final StringPath birthday = createString("birthday");

    public final StringPath education = createString("education");

    public final NumberPath<Float> height = createNumber("height", Float.class);

    public final NumberPath<Integer> leftAoNum = createNumber("leftAoNum", Integer.class);

    public final NumberPath<Integer> leftAtBatNum = createNumber("leftAtBatNum", Integer.class);

    public final NumberPath<Integer> leftBbNum = createNumber("leftBbNum", Integer.class);

    public final NumberPath<Integer> leftDpNum = createNumber("leftDpNum", Integer.class);

    public final NumberPath<Integer> leftGameNum = createNumber("leftGameNum", Integer.class);

    public final NumberPath<Integer> leftHitNum = createNumber("leftHitNum", Integer.class);

    public final NumberPath<Integer> leftHrNum = createNumber("leftHrNum", Integer.class);

    public final NumberPath<Integer> leftIbbNum = createNumber("leftIbbNum", Integer.class);

    public final NumberPath<Integer> leftOps = createNumber("leftOps", Integer.class);

    public final NumberPath<Integer> leftPaNum = createNumber("leftPaNum", Integer.class);

    public final NumberPath<Integer> leftR = createNumber("leftR", Integer.class);

    public final NumberPath<Integer> leftRbi = createNumber("leftRbi", Integer.class);

    public final NumberPath<Integer> leftSfNum = createNumber("leftSfNum", Integer.class);

    public final NumberPath<Integer> leftShNum = createNumber("leftShNum", Integer.class);

    public final NumberPath<Integer> leftThreebHitNum = createNumber("leftThreebHitNum", Integer.class);

    public final NumberPath<Integer> leftTwobHitNum = createNumber("leftTwobHitNum", Integer.class);

    public final StringPath name = createString("name");

    public final StringPath playerWeatherTmi = createString("playerWeatherTmi");

    public final StringPath position = createString("position");

    public final NumberPath<Integer> rightAoNum = createNumber("rightAoNum", Integer.class);

    public final NumberPath<Integer> rightAtBatNum = createNumber("rightAtBatNum", Integer.class);

    public final NumberPath<Integer> rightBbNum = createNumber("rightBbNum", Integer.class);

    public final NumberPath<Integer> rightDpNum = createNumber("rightDpNum", Integer.class);

    public final NumberPath<Integer> rightGameNum = createNumber("rightGameNum", Integer.class);

    public final NumberPath<Integer> rightHitNum = createNumber("rightHitNum", Integer.class);

    public final NumberPath<Integer> rightHrNum = createNumber("rightHrNum", Integer.class);

    public final NumberPath<Integer> rightIbbNum = createNumber("rightIbbNum", Integer.class);

    public final NumberPath<Integer> rightOps = createNumber("rightOps", Integer.class);

    public final NumberPath<Integer> rightPaNum = createNumber("rightPaNum", Integer.class);

    public final NumberPath<Integer> rightR = createNumber("rightR", Integer.class);

    public final NumberPath<Integer> rightRbi = createNumber("rightRbi", Integer.class);

    public final NumberPath<Integer> rightSfNum = createNumber("rightSfNum", Integer.class);

    public final NumberPath<Integer> rightShNum = createNumber("rightShNum", Integer.class);

    public final NumberPath<Integer> rightThreebHitNum = createNumber("rightThreebHitNum", Integer.class);

    public final NumberPath<Integer> rightTwobHitNum = createNumber("rightTwobHitNum", Integer.class);

    public final NumberPath<Integer> season = createNumber("season", Integer.class);

    public final NumberPath<Float> standardDeviation = createNumber("standardDeviation", Float.class);

    public final QTeams team;

    public final StringPath team_name = createString("team_name");


    public final NumberPath<Float> weight = createNumber("weight", Float.class);

    public QBatters(String variable) {
        this(Batters.class, forVariable(variable), INITS);
    }

    public QBatters(Path<? extends Batters> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QBatters(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QBatters(PathMetadata metadata, PathInits inits) {
        this(Batters.class, metadata, inits);
    }

    public QBatters(Class<? extends Batters> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.baseballPlayer = inits.isInitialized("baseballPlayer") ? new QBaseballPlayers(forProperty("baseballPlayer")) : null;
        this.team = inits.isInitialized("team") ? new QTeams(forProperty("team")) : null;
    }

}

