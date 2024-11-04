namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class InvoiceController : ControllerBase
    {
        IInvoiceRepository Invoicerepository;
        public InvoiceController (IInvoiceRepository _Invoicerepository){
                Invoicerepository = _Invoicerepository;
        }
                // GET api/Invoice
        [HttpGet]
        public async Task<IActionResult> GetInvoice()
        {
        

            try
            {
                List<Invoice>? allInvoice = await Invoicerepository.GetAllInvoice();
                return Ok(allInvoice);
            }
            catch
            {
                return Problem();
            }

        }

        // GET api/Invoice/2
        [HttpGet("{id}")]
        public async Task<IActionResult> GetInvoiceByID(int? id)
        {
            try
            {
                if (id == 0 || id == null)
                {
                    return BadRequest();
                }
                Invoice? Invoice = await Invoicerepository.GetInvoiceById(id);
                return Ok(Invoice);
            }
            catch
            {
                return Problem();
            }
        }
        // POST api/Invoice
        [HttpPost]
        public async Task<IActionResult> AddInvoice(Invoice Invoice)
        {

            try
            {
                if (Invoice == null)
                {
                    return BadRequest();
                }
                bool res = await Invoicerepository.AddInvoice(Invoice);
                return Ok(res);
            }
            catch
            {
                return Problem();
            }
        }

        // PUT api/Invoice
        [HttpPut]
        public async Task<IActionResult> EditInvoice(Invoice Invoice)
        {

            try
            {
                if (Invoice == null)
                {
                    return BadRequest();
                }
                bool res = await Invoicerepository.UpdateInvoice(Invoice);
                return Ok(res);
            }
            catch
            {
                return Problem();
            }
            
        }

        // DELETE api/Invoice/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteInvoice(int? id)
        {
            try
            {
                if (id == 0 || id == null)
                {
                    return BadRequest();
                }
                bool role = await Invoicerepository.DeleteInvoice(id);
                return Ok(role);
            }
            catch
            {
                return Problem();
            }
        }
                
    }
    
}