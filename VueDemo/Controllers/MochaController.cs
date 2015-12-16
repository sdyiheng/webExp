#if DEBUG
namespace VueDemo.Controllers
{
    using System.Web.Mvc;

    public class MochaController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }
    }
}
#endif
