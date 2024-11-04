namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PaymentController : ControllerBase
    {
        IPaymentRepository Paymentrepository;
        public PaymentController (IPaymentRepository _Paymentrepository){
                Paymentrepository = _Paymentrepository;
        }
                // GET api/Payment
        [HttpGet]
        public async Task<IActionResult> GetPayment()
        {
        

            try
            {
                List<Payment>? allPayment = await Paymentrepository.GetAllPayment();
                return Ok(allPayment);
            }
            catch
            {
                return Problem();
            }

        }

        // GET api/Payment/2
        [HttpGet("{id}")]
        public async Task<IActionResult> GetPaymentByID(int? id)
        {
            try
            {
                if (id == 0 || id == null)
                {
                    return BadRequest();
                }
                Payment? Payment = await Paymentrepository.GetPaymentById(id);
                return Ok(Payment);
            }
            catch
            {
                return Problem();
            }
        }
        // POST api/Payment
        [HttpPost]
        public async Task<IActionResult> AddPayment(Payment Payment)
        {

            try
            {
                if (Payment == null)
                {
                    return BadRequest();
                }
                bool res = await Paymentrepository.AddPayment(Payment);
                return Ok(res);
            }
            catch
            {
                return Problem();
            }
        }

        // PUT api/Payment
        [HttpPut]
        public async Task<IActionResult> EditPayment(Payment Payment)
        {

            try
            {
                if (Payment == null)
                {
                    return BadRequest();
                }
                bool res = await Paymentrepository.UpdatePayment(Payment);
                return Ok(res);
            }
            catch
            {
                return Problem();
            }
            
        }

        // DELETE api/Payment/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePayment(int? id)
        {
            try
            {
                if (id == 0 || id == null)
                {
                    return BadRequest();
                }
                bool role = await Paymentrepository.DeletePayment(id);
                return Ok(role);
            }
            catch
            {
                return Problem();
            }
        }
                
    }
    
}