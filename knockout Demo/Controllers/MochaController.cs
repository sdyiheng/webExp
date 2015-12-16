#if DEBUG
namespace knockout_Demo.Controllers
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
