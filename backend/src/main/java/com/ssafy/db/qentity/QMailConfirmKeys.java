package com.ssafy.db.qentity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;
import com.ssafy.db.entity.MailConfirmKeys;
import com.querydsl.core.types.PathMetadata;
import javax.annotation.Generated;
import com.querydsl.core.types.Path;


/**
 * QMailConfirmKeys is a Querydsl query type for MailConfirmKeys
 */
@Generated("com.querydsl.codegen.EntitySerializer")
public class QMailConfirmKeys extends EntityPathBase<MailConfirmKeys> {

    private static final long serialVersionUID = 729852571L;

    public static final QMailConfirmKeys mailConfirmKeys = new QMailConfirmKeys("mailConfirmKeys");

    public final QBaseEntity _super = new QBaseEntity(this);

    public final DateTimePath<java.time.LocalDateTime> createDate = createDateTime("createDate", java.time.LocalDateTime.class);

    public final StringPath email = createString("email");

    public final StringPath randomNumber = createString("randomNumber");

    //inherited
    public final NumberPath<Integer> uid = _super.uid;

    public QMailConfirmKeys(String variable) {
        super(MailConfirmKeys.class, forVariable(variable));
    }

    public QMailConfirmKeys(Path<? extends MailConfirmKeys> path) {
        super(path.getType(), path.getMetadata());
    }

    public QMailConfirmKeys(PathMetadata metadata) {
        super(MailConfirmKeys.class, metadata);
    }

}

