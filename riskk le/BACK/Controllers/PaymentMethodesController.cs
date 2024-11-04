namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PaymentMethodeController : ControllerBase
    {
        IPaymentMethodeRepository PaymentMethoderepository;
        public PaymentMethodeController (IPaymentMethodeRepository _PaymentMethoderepository){
                PaymentMethoderepository = _PaymentMethoderepository;
        }
                // GET api/PaymentMethode
        [HttpGet]
        public async Task<IActionResult> GetPaymentMethode()
        {
        

            try
            {
                List<PaymentMethode>? allPaymentMethode = await PaymentMethoderepository.GetAllPaymentMethode();
                return Ok(allPaymentMethode);
            }
            catch
            {
                return Problem();
            }

        }

        // GET api/PaymentMethode/2
        [HttpGet("{id}")]
        public async Task<IActionResult> GetPaymentMethodeByID(int? id)
        {
            try
            {
                if (id == 0 || id == null)
                {
                    return BadRequest();
                }
                PaymentMethode? PaymentMethode = await PaymentMethoderepository.GetPaymentMethodeById(id);
                return Ok(PaymentMethode);
            }
            catch
            {
                return Problem();
            }
        }
        // POST api/PaymentMethode
        [HttpPost]
        public async Task<IActionResult> AddPaymentMethode(PaymentMethode PaymentMethode)
        {

            try
            {
                if (PaymentMethode == null)
                {
                    return BadRequest();
                }
                bool res = await PaymentMethoderepository.AddPaymentMethode(PaymentMethode);
                return Ok(res);
            }
            catch
            {
                return Problem();
            }
        }

        // PUT api/PaymentMethode
        [HttpPut]
        public async Task<IActionResult> EditPaymentMethode(PaymentMethode PaymentMethode)
        {

            try
            {
                if (PaymentMethode == null)
                {
                    return BadRequest();
                }
                bool res = await PaymentMethoderepository.UpdatePaymentMethode(PaymentMethode);
                return Ok(res);
            }
            catch
            {
                return Problem();
            }
            
        }

        // DELETE api/PaymentMethode/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePaymentMethode(int? id)
        {
            try
            {
                if (id == 0 || id == null)
                {
                    return BadRequest();
                }
                bool role = await PaymentMethoderepository.DeletePaymentMethode(id);
                return Ok(role);
            }
            catch
            {
                return Problem();
            }
        }
                
    }
    
}