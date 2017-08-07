﻿using Microsoft.VisualStudio.TestTools.UnitTesting;
using TradingPlatform.Models;

namespace TradingPlatform.Tests.Model
{
    [TestClass]
    class ModelTest
    {
        [TestMethod]
        public void CreateDatabase()
        {
            using (DBContext context = new DBContext())
            {
                context.Traders.Add(new Trader { Id = 1, Gender = "Male", Name = "lixing", Orders = null, OrderBooks = null});
                context.SaveChanges();

                Trader Trader = context.Traders.Find(1);
                context.SaveChanges();

                Assert.IsNotNull(Trader);
            }
        }
    }
}
