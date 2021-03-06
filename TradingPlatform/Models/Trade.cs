﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace TradingPlatform.Models
{
    [Table("Trade")]
    public class Trade
    {
        [Key]
        public int Id { get; set; }
        public double Price { get; set; }
        public int Quantity { get; set; }
        public bool IsSuccess { get; set; }

        public virtual Execution Execution { get; set; }
    }
}