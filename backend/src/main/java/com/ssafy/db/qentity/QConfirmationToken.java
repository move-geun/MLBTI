package com.ssafy.db.qentity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;
import com.ssafy.db.entity.ConfirmationToken;
import com.querydsl.core.types.PathMetadata;
import javax.annotation.Generated;
import com.querydsl.core.types.Path;


/**
 * QConfirmationToken is a Querydsl query type for ConfirmationToken
 */
@Generated("com.querydsl.codegen.EntitySerializer")
public class QConfirmationToken extends EntityPathBase<ConfirmationToken> {

    private static final long serialVersionUID = 1949980482L;

    public static final QConfirmationToken confirmationToken = new QConfirmationToken("confirmationToken");

    public final DateTimePath<java.time.LocalDateTime> createDate = createDateTime("createDate", java.time.LocalDateTime.class);

    public final DateTimePath<java.time.LocalDateTime> expirationDate = createDateTime("expirationDate", java.time.LocalDateTime.class);

    public final BooleanPath expired = createBoolean("expired");

    public final StringPath id = createString("id");

    public final DateTimePath<java.time.LocalDateTime> lastModifiedDate = createDateTime("lastModifiedDate", java.time.LocalDateTime.class);

    public final StringPath userId = createString("userId");

    public QConfirmationToken(String variable) {
        super(ConfirmationToken.class, forVariable(variable));
    }

    public QConfirmationToken(Path<? extends ConfirmationToken> path) {
        super(path.getType(), path.getMetadata());
    }

    public QConfirmationToken(PathMetadata metadata) {
        super(ConfirmationToken.class, metadata);
    }

}

