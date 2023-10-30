
const StatementHeader = () => {
  return (
    <section>
      <div className="mx-auto w-3/4">
        <table className="border text-left">
            <tbody>
                <tr className="border">
                    <td></td>   
                    <td>Account No.</td>   
                    <td colSpan={1}>123456</td>   
                </tr>
                <tr>
                    <td></td>   
                    <td>Old Account No.</td>   
                    <td colSpan={1}></td>   
                </tr>
                <tr>
                    <td></td>   
                    <td>Account Type</td>   
                    <td colSpan={1}>Current</td>   
                </tr>
                <tr>
                    <td></td>   
                    <td>IBAN</td>   
                    <td colSpan={1}>PKJSB123456</td>   
                </tr>
                <tr>
                    <td></td>   
                    <td>Account No.</td>   
                    <td colSpan={1}>123456</td>   
                </tr>
                <tr>
                    <td></td>   
                    <td>Account No.</td>   
                    <td colSpan={1}>123456</td>   
                </tr>
            </tbody>
        </table>
      </div>
    </section>
  )
}

export default StatementHeader
