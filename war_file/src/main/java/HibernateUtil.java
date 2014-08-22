import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;
public class HibernateUtil
{
    private static SessionFactory sessionFactory;

    public static SessionFactory getSessionFactory()
    {
        return sessionFactory;
    }

    public HibernateUtil(){}

    static
    {
        Configuration cfg = new Configuration();
        cfg.configure();
        sessionFactory = cfg.buildSessionFactory();
    }

    public static Session getSession()
    {
        return sessionFactory.openSession();
    }

    public static void main(String[] args)
    {
        sessionFactory = HibernateUtil.getSessionFactory();
        System.out.println(sessionFactory);
    }
}