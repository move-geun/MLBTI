package com.ssafy.db.qentity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;
import com.ssafy.db.entity.Schedules;
import com.querydsl.core.types.PathMetadata;
import javax.annotation.Generated;
import com.querydsl.core.types.Path;


/**
 * QSchedules is a Querydsl query type for Schedules
 */
@Generated("com.querydsl.codegen.EntitySerializer")
public class QSchedules extends EntityPathBase<Schedules> {

    private static final long serialVersionUID = 211279674L;

    public static final QSchedules schedules = new QSchedules("schedules");

    public final StringPath awayId = createString("awayId");

    public final StringPath awayName = createString("awayName");

    public final StringPath awayPotcherNote = createString("awayPotcherNote");

    public final StringPath awayProbablePitcher = createString("awayProbablePitcher");

    public final StringPath awayScore = createString("awayScore");

    public final StringPath currentInning = createString("currentInning");

    public final StringPath doubleheader = createString("doubleheader");

    public final StringPath gameDate = createString("gameDate");

    public final StringPath gameDateTime = createString("gameDateTime");

    public final NumberPath<Integer> gameId = createNumber("gameId", Integer.class);

    public final StringPath gameNum = createString("gameNum");

    public final StringPath gameType = createString("gameType");

    public final StringPath homeId = createString("homeId");

    public final StringPath homeName = createString("homeName");

    public final StringPath homePitcherNote = createString("homePitcherNote");

    public final StringPath homeProbablePitcher = createString("homeProbablePitcher");

    public final StringPath homeScore = createString("homeScore");

    public final StringPath inningState = createString("inningState");

    public final StringPath losingPitcher = createString("losingPitcher");

    public final StringPath losingTeam = createString("losingTeam");

    public final StringPath savePitcher = createString("savePitcher");

    public final StringPath status = createString("status");

    public final StringPath summary = createString("summary");

    public final StringPath venueId = createString("venueId");

    public final StringPath venueName = createString("venueName");

    public final StringPath winningPitcher = createString("winningPitcher");

    public final StringPath winningTeam = createString("winningTeam");

    public QSchedules(String variable) {
        super(Schedules.class, forVariable(variable));
    }

    public QSchedules(Path<? extends Schedules> path) {
        super(path.getType(), path.getMetadata());
    }

    public QSchedules(PathMetadata metadata) {
        super(Schedules.class, metadata);
    }

}

