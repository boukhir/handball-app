<?php

namespace App\Repository;

use App\Entity\Equipes;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Equipes>
 *
 * @method Equipes|null find($id, $lockMode = null, $lockVersion = null)
 * @method Equipes|null findOneBy(array $criteria, array $orderBy = null)
 * @method Equipes[]    findAll()
 * @method Equipes[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class EquipesRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Equipes::class);
    }

    public function save(Equipes $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(Equipes $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    /**
     * Finds objects by searching for a value in the "libelle" or "entraineur" fields.
     *
     * Parameters:
     *      - $value (string): the search term to use when querying the database
     *
     * Return: array (an array of objects that match the search criteria)
     */
    public function findOneBySomeField($value): array
    {
        // Creates a query builder instance for the Equipes entity
        $qb = $this->createQueryBuilder('e');
        // Adds a WHERE clause to the query to match the search term to the "libelle" or "entraineur" fields
        return $qb->where(
            $qb->expr()->orX(
                $qb->expr()->like('e.libelle', ':search'),
                $qb->expr()->like('e.entraineur', ':search')
            )
        )
            // Binds the search term to the "search" parameter in the query
            ->setParameter('search', '%' . $value . '%')
            // Gets the query object and executes it
            ->getQuery()
            // Gets the results of the query
            ->getResult();
    }

//    /**
//     * @return Equipes[] Returns an array of Equipes objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('e')
//            ->andWhere('e.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('e.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?Equipes
//    {
//        return $this->createQueryBuilder('e')
//            ->andWhere('e.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
