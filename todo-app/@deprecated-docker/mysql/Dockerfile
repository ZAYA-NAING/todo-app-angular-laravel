ARG MYSQL_VERSION
FROM mysql:${MYSQL_VERSION}

#####################################
# Set Timezone
#####################################

ARG TZ=UTC
ENV TZ ${TZ}
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone && chown -R mysql:root /var/lib/mysql/

ADD ./my.cnf /etc/mysql/conf.d/my.cnf

# for windows
RUN chmod 644 /etc/mysql/conf.d/my.cnf
