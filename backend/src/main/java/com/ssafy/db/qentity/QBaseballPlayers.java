package com.ssafy.db.qentity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;
import com.ssafy.db.entity.BaseballPlayers;
import com.querydsl.core.types.PathMetadata;
import javax.annotation.Generated;
import com.querydsl.core.types.Path;


/**
 * QBaseballPlayers is a Querydsl query type for BaseballPlayers
 */
@Generated("com.querydsl.codegen.EntitySerializer")
public class QBaseballPlayers extends EntityPathBase<BaseballPlayers> {

    private static final long serialVersionUID = 661941056L;

    public static final QBaseballPlayers baseballPlayers = new QBaseballPlayers("baseballPlayers");

    public final BooleanPath active = createBoolean("active");

    public final StringPath batSideCode = createString("batSideCode");

    public final StringPath birthCity = createString("birthCity");

    public final StringPath birthCountry = createString("birthCountry");

    public final StringPath birthDate = createString("birthDate");

    public final StringPath birthStateProvince = createString("birthStateProvince");

    public final NumberPath<Integer> currentAge = createNumber("currentAge", Integer.class);

    public final StringPath deathCity = createString("deathCity");

    public final StringPath deathDate = createString("deathDate");

    public final StringPath deathStateProvince = createString("deathStateProvince");

    public final StringPath fullName = createString("fullName");

    public final StringPath gender = createString("gender");

    public final StringPath height = createString("height");

    public final StringPath imgUrl = createString("imgUrl");

    public final BooleanPath isPlayer = createBoolean("isPlayer");

    public final BooleanPath isVerified = createBoolean("isVerified");

    public final StringPath lastPlayedDate = createString("lastPlayedDate");

    public final StringPath mlbDebutDate = createString("mlbDebutDate");

    public final StringPath nickName = createString("nickName");

    public final StringPath pitchHandCode = createString("pitchHandCode");

    public final StringPath primaryPositionAbbreviation = createString("primaryPositionAbbreviation");

    public final StringPath primaryPositionCode = createString("primaryPositionCode");

    public final StringPath primaryPositionName = createString("primaryPositionName");

    public final StringPath primaryPositionType = createString("primaryPositionType");

    public final StringPath strikeZoneBottom = createString("strikeZoneBottom");

    public final StringPath strikeZoneTop = createString("strikeZoneTop");

    public final NumberPath<Integer> uid = createNumber("uid", Integer.class);

    public final StringPath weight = createString("weight");

    public QBaseballPlayers(String variable) {
        super(BaseballPlayers.class, forVariable(variable));
    }

    public QBaseballPlayers(Path<? extends BaseballPlayers> path) {
        super(path.getType(), path.getMetadata());
    }

    public QBaseballPlayers(PathMetadata metadata) {
        super(BaseballPlayers.class, metadata);
    }

}

