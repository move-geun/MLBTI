package com.ssafy.db.qentity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;
import com.ssafy.db.entity.Teams;
import com.querydsl.core.types.PathMetadata;
import javax.annotation.Generated;
import com.querydsl.core.types.Path;


/**
 * QTeams is a Querydsl query type for Teams
 */
@Generated("com.querydsl.codegen.EntitySerializer")
public class QTeams extends EntityPathBase<Teams> {

    private static final long serialVersionUID = 471668532L;

    public static final QTeams teams = new QTeams("teams");

    public final StringPath abbreviation = createString("abbreviation");

    public final BooleanPath active = createBoolean("active");

    public final StringPath allStarStatus = createString("allStarStatus");

    public final StringPath clubName = createString("clubName");

    public final NumberPath<Integer> divisionId = createNumber("divisionId", Integer.class);

    public final StringPath divisionName = createString("divisionName");

    public final NumberPath<Integer> firstYearOfPlay = createNumber("firstYearOfPlay", Integer.class);

    public final StringPath franchiseName = createString("franchiseName");

    public final NumberPath<Integer> id = createNumber("id", Integer.class);

    public final NumberPath<Integer> leagueId = createNumber("leagueId", Integer.class);

    public final StringPath leagueName = createString("leagueName");

    public final StringPath locationName = createString("locationName");

    public final StringPath logo = createString("logo");

    public final StringPath name = createString("name");

    public final NumberPath<Integer> parentOrgId = createNumber("parentOrgId", Integer.class);

    public final StringPath parentOrgName = createString("parentOrgName");

    public final NumberPath<Integer> season = createNumber("season", Integer.class);

    public final StringPath shortName = createString("shortName");

    public final NumberPath<Integer> sportId = createNumber("sportId", Integer.class);

    public final StringPath sportName = createString("sportName");

    public final StringPath teamCode = createString("teamCode");

    public final StringPath teamName = createString("teamName");

    public final NumberPath<Integer> venueId = createNumber("venueId", Integer.class);

    public final StringPath venueName = createString("venueName");

    public QTeams(String variable) {
        super(Teams.class, forVariable(variable));
    }

    public QTeams(Path<? extends Teams> path) {
        super(path.getType(), path.getMetadata());
    }

    public QTeams(PathMetadata metadata) {
        super(Teams.class, metadata);
    }

}

