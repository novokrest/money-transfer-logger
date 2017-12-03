package com.oneuse.services.moneytransferlogger.repository;

import com.oneuse.services.moneytransferlogger.entity.TransferEntity;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(path = "/transfers", collectionResourceRel = "transfers")
public interface TransferRepository extends PagingAndSortingRepository<TransferEntity, Long> {
}
