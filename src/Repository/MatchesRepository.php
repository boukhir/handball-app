<?php

namespace App\Repository;

use App\Entity\Matches;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Matches>
 *
 * @method Matches|null find($id, $lockMode = null, $lockVersion = null)
 * @method Matches|null findOneBy(array $criteria, array $orderBy = null)
 * @method Matches[]    findAll()
 * @method Matches[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class MatchesRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Matches::class);
    }

    public function save(Matches $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(Matches $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    /**
     * Searches for matches based on the given criteria.
     *
     * Parameters:
     * $criteria (array): an associative array of search criteria. The following keys are supported:
     *     - 'teamName': the name of the team to be searched
     *     - 'startDate': the DateTime object representing the earliest match date to include in the search results
     *     - 'endDate': the DateTime object representing the latest match date to include in the search results
     *     - 'previousMatches': a flag indicating whether to include only previous matches
     *     - 'upcomingMatches': a flag indicating whether to include only upcoming matches
     *
     * Return: array (an array of Match objects that match the search criteria)
     */
    public function search(array $criteria = []): array
    {
        // Create a query builder instance for the Matches entity
        $queryBuilder = $this->createQueryBuilder('m');

        // Adds WHERE clauses to the query builder based on the availability of the specified search criteria
        if (isset($criteria['teamName'])) {
            $queryBuilder->andWhere($queryBuilder->expr()->orX(
                $queryBuilder->expr()->like('m.equipe_locale', ':teamName'),
                $queryBuilder->expr()->like('m.equipe_adverse', ':teamName')
            ))
                ->setParameter('teamName', '%'.$criteria['teamName'].'%');
        }

        if (isset($criteria['startDate'])) {
            $queryBuilder->andWhere('m.date_heure >= :startDate')
                ->setParameter('startDate', $criteria['startDate'], Types::DATETIME_MUTABLE);
        }

        if (isset($criteria['endDate'])) {
            $queryBuilder->andWhere('m.date_heure <= :endDate')
                ->setParameter('endDate', $criteria['endDate'], Types::DATETIME_MUTABLE);
        }

        if (isset($criteria['previousMatches'])) {
            $queryBuilder->andWhere('m.date_heure < :now')
                ->setParameter('now', new \DateTime('now'), Types::DATETIME_MUTABLE)
                ->orderBy('m.date_heure', 'DESC');
        }

        if (isset($criteria['upcomingMatches'])) {
            $queryBuilder->andWhere('m.date_heure >= :now')
                ->setParameter('now', new \DateTime('now'), Types::DATETIME_MUTABLE)
                ->orderBy('m.date_heure', 'ASC');
        }
        // Execute the query and return the results as an array of Match objects
        return $queryBuilder->getQuery()->getResult();
    }


//    /**
//     * @return Matches[] Returns an array of Matches objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('m')
//            ->andWhere('m.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('m.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?Matches
//    {
//        return $this->createQueryBuilder('m')
//            ->andWhere('m.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
